export const makeModelOptions = (sequelize, tableName) => ({
    charset: 'utf8',
    collate: 'utf8_unicode_ci',
    paranoid: true,
    sequelize,
    tableName,
})
