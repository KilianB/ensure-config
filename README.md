# ensure-config

```bash
bun install ensure-config
```

Fail early and enforces presence of env variables. It is much better for the application to fail at startup than to run into undefined behavior because a value is missing.

# Usage

Replace `process.env` calls with the `envOrThrow` equivalent and define the variables right after the import section. The variables are unconditionally evaluated at startup and ensure that the application crashes before a lazily evaluated code path with an env variable is it.

```env
PORT=4000
REDIS_URL= 'redis://127,0,0,1;6379'
CORS_DOMAINS= 'localhost:3000,localhost:14000'
LOGGING_ENABLED= true
FAIL_EARLY = 0
```

```ts
import {
  envOrThrow,
  envOrThrowArray,
  envOrThrowBoolean,
  envOrThrowInt,
} from 'ensure-config';

const PORT = envOrThrowInt('PORT');
const REDIS_URL = envOrThrow('REDIS_URL');
const CORS_DOMAINS = envOrThrowArray('CORS_DOMAINS');
const LOGGING_ENABLED = envOrThrowBoolean('LOGGING_ENABLED');
const FAIL_EARLY = envOrThrowBoolean('FAIL_EARLY');

///Rest of the code
```
