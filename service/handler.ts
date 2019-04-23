import { Handler } from 'aws-lambda'

export const main: Handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Success!',
      input: event,
    }),
  }
}
