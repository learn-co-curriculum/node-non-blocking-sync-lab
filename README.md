# Sync File Read and Write Lab

## Objectives

1. Implement a sync file read script
1. Implement a sync file write script

## Introduction

In this lab, you'll practice synchronous code with `fs`.

## Instructions

1. Create a file `sync.js`
1. Create a module which exports a function `mask()` with `module.exports = ...`. 
1. Read from a file `customers.csv` with `fs.readFileSync()`
1. Iterate over each record and mask the credit card number by replacing all but the last four digits with the `*` symbol
1. Save the resulting masked customer data into `customers.json` file with `JSON.stringify()` and `fs.writeFileSync()`.
1. Implement function mask so that it returns the masked `customers` data
1. Run tests

