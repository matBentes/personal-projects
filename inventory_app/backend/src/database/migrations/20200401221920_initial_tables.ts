import Knex from 'knex'

import tableName from '../../constants/tableNames'

function addDefaultColumns(knex: Knex, table: Knex.CreateTableBuilder) {
  table.timestamp('created_at').defaultTo(knex.fn.now())
  table.timestamp('updated_at').defaultTo(knex.fn.now())
  table.timestamp('deleted_at')
}

async function createTableName(tableName: string, knex: Knex) {
  return await knex.schema.createTable(tableName, (table) => {
    table.increments().notNullable()
    table.string('name').notNullable().unique()
    addDefaultColumns(knex, table)
  })
}

function references(table: Knex.TableBuilder, foreignTableName: string) {
  table
    .integer(`${foreignTableName}_id`)
    .unsigned()
    .references('id')
    .inTable(foreignTableName)
    .onDelete('cascade')
}

export async function up(knex: Knex) {
  await Promise.all([
    knex.schema.createTable(tableName.user, (table) => {
      table.increments().notNullable()
      table.string('email').notNullable().unique()
      table.string('name').notNullable()
      table.string('password', 127).notNullable()
      table.dateTime('last_login')
      addDefaultColumns(knex, table)
    }),
    createTableName(tableName.contry, knex),
    createTableName(tableName.itemType, knex),
    createTableName(tableName.state, knex),
    createTableName(tableName.shape, knex),
    /* location table  */
    knex.schema.createTable(tableName.location, (table) => {
      table.increments().notNullable()
      table.string('name').notNullable().unique()
      table.string('description', 1000)
      table.string('img_url', 2000)
      addDefaultColumns(knex, table)
    }),
    /* address table */
    knex.schema.createTable(tableName.address, (table) => {
      table.increments().notNullable()
      table.string('street_adress_1', 50).notNullable()
      table.string('street_address_2', 50)
      table.string('city', 50).notNullable()
      table.string('zipcode', 15).notNullable()
      table.float('latitude').notNullable()
      table.float('longitude').notNullable()
      references(table, tableName.state)
      references(table, tableName.contry)
    }),
    /* manufacturer table */
    knex.schema.createTable(tableName.manufeacturer, (table) => {
      table.increments().notNullable()
      table.string('name').notNullable()
      table.string('image_url')
      table.string('website_url')
      table.string('description', 1000)
      table.string('email', 254)
      references(table, tableName.address)
    }),
  ])
}

export async function down(knex: Knex) {
  return await Promise.all(
    [
      tableName.address,
      tableName.contry,
      tableName.itemType,
      tableName.location,
      tableName.shape,
      tableName.state,
      tableName.user,
    ].map((tableName: string) => knex.schema.dropTable(tableName)),
  )
}
