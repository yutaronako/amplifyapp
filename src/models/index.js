// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Note, Test } = initSchema(schema);

export {
  Note,
  Test
};