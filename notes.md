Syntax of import:

import name from 'module-name'
Importing can be done in various ways:

Importing an entire module: 

import * as name from 'module-name'
Import default export from a module:

import name from 'module-name'
Importing a single export from a module:

import { name } from 'module-name'
Importing multiple exports from a module:

import { nameOne , nameTwo } from 'module-name'
Importing a module for side effects only

import './module-name'