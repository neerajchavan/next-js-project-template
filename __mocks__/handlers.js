import { rest } from "msw";
import dashboardResponse from "./response/dashboardResponse"

const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/todos/1", (req, res, ctx) => {
    return res(
      ctx.json(dashboardResponse)
    );
  }),
]

export default handlers;