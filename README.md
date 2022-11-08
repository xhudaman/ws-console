# ws-console

Console override for sending logs to a websocket server.

## How to use

### Installation

#### pnpm

```bash
  pnpm add @xhudaman/ws-console
```

#### npm

```bash
  npm i -s @xhudaman/ws-console
```

#### yarn

```bash
  yarn add @xhudaman/ws-console
```

### Example Usage

```js
import WSConsole from "@xhudaman/ws-console";

const wsConsole = WSConosle({
  // Use the address of your debug server if it differs from the example
  debugServerUrl: "ws://localhost:3001",
  enableInProduction: true,
});
```

### Configuration

|          Key           | Required | Default Value |                                 Accepted Values                                 |
| :--------------------: | :------: | :-----------: | :-----------------------------------------------------------------------------: |
|     debugServerUrl     |  `true`  |      N/A      | Any valid WebSocket URL. For example: `ws://domain:port` or `wss://domain:port` |
|   enableInProduction   | `false`  |    `false`    |                                `true` or `false`                                |
| enableConsoleOverrides | `false`  |    `true`     |                                `true` or `false`                                |
