/**
 * Return the value associated with the key. If the value is absent an error is thrown
 *
 * @param key property name in env file
 * @returns the value associated for the key
 * @throws Error if the key is not present
 */
export function envOrThrow(key: string): string {
  if (!Object.prototype.hasOwnProperty.call(process.env, key)) {
    throw new Error(`Env: ${key} not present in .env file`);
  }
  const value = process.env[key];

  if (value === '') {
    console.warn(`Env: ${key} is an empty string. Is this desired?`);
  }

  return value!;
}

/**
 * Return the value associated with the key. If the value is not present undefined is returned
 *
 * @param key property name in env file
 * @returns the value associated with the key or undefined
 */
export function envOptional(key: string): string | undefined {
  return process.env[key];
}

/**
 * Return the value associated with the key. If the value is not present an error is thrown
 *
 * @param key property name in env file
 * @param logger a logger instance where the error will be logged
 * @returns the int value associated with the key
 * @throws Error if the key is not present
 */
export function envOrThrowInt(key: string): number {
  const value = parseInt(envOrThrow(key));

  if (Number.isNaN(value)) {
    console.warn(`Env: ${key} is not a valid number. NaN wil be returned`);
  }

  return value;
}

/**
 * Return the value associated with the key. If the value is not present an error is thrown.
 *
 * Valid truthy env values are true TRUE 1, otherwise false will be returned if the key is present.
 *
 * @param key property name in env file
 * @returns the boolean value associated with the key
 * @throws Error if the key is not present
 */
export function envOrThrowBoolean(key: string): boolean {
  const value = envOrThrow(key).toLowerCase();

  if (value === 'true' || value === '1') {
    return true;
  }

  if (value === 'false' || value === '0') {
    return false;
  }

  throw new Error(
    `Env: ${key} could not be parsed to a valid boolean value. ['true','false', '1', '0'] expected`
  );
}

/**
 * Parse the value of the env file and return it as a string array.
 *
 * The individual values are separated by a comma without spaces.
 *
 * e.g.
 * CURRENCIES = 'EUR,USD,'CHF'
 *
 * @param key property name in env file
 * @returns the string[] value associated with the key
 * @throws Error if the key is not present
 */
export function envOrThrowArray(key: string): string[] {
  const value = envOrThrow(key).split(',');

  if (value.length === 1 && value[0] === '') {
    return [];
  }

  return value;
}
