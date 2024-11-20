"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./app/config"));
async function main() {
    await mongoose.connect(config_1.default.database_url);
}
app_1.default.listen(config_1.default.port, () => {
    console.log(`Server is running at http://localhost:${config_1.default.port}`);
});
