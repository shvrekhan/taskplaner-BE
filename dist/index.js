"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const authRouter_1 = __importDefault(require("./router/authRouter"));
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: 'https://taskplaner-fe.vercel.app/'
}));
app.get("/", (req, res) => {
    res.status(200).json({ SUCCESS: "Task Planer BE Module." });
});
app.use("/auth", authRouter_1.default);
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
//# sourceMappingURL=index.js.map