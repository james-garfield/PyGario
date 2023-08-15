/**
 *  @fileoverview Version of pyscript
 *  The version is based on calver which contains YEAR.MONTH.DAY.MODIFIER.
 *  The Modifier can be an optional text tag, such as "dev", "rc", etc.
 *
 *  We are adding this file because we can't add version in main.js due to
 *  circular imports.
 */

export const version = '2023.05.1.dev';
