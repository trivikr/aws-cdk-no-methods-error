"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
exports.handler = async () => ({
    statusCode: 200,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
    },
    body: "Hello World!",
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXdzLWNkay1uby1tZXRob2RzLWVycm9yLXN0YWNrLmhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhd3MtY2RrLW5vLW1ldGhvZHMtZXJyb3Itc3RhY2suaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBYSxRQUFBLE9BQU8sR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUM7SUFDbEMsVUFBVSxFQUFFLEdBQUc7SUFDZixPQUFPLEVBQUU7UUFDUCw2QkFBNkIsRUFBRSxHQUFHO1FBQ2xDLGtDQUFrQyxFQUFFLElBQUk7S0FDekM7SUFDRCxJQUFJLEVBQUUsY0FBYztDQUNyQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaGFuZGxlciA9IGFzeW5jICgpID0+ICh7XG4gIHN0YXR1c0NvZGU6IDIwMCxcbiAgaGVhZGVyczoge1xuICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxuICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctQ3JlZGVudGlhbHNcIjogdHJ1ZSxcbiAgfSxcbiAgYm9keTogXCJIZWxsbyBXb3JsZCFcIixcbn0pO1xuIl19