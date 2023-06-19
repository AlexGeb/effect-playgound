import { pipe } from "@effect/data/Function";
import * as Schema from "@effect/schema/Schema";

export const MySchema = pipe(
  Schema.struct({
    a: Schema.optional(Schema.string),
    b: Schema.optional(Schema.string).toOption(),
  })
);

const decode = Schema.decode(MySchema);
decode({ a: undefined });
