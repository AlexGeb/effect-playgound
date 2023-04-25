import * as Either from "@effect/data/Either";
import { pipe } from "@effect/data/Function";
import * as Pretty from "@effect/schema/Pretty";
import * as Schema from "@effect/schema/Schema";
import * as TreeFormatter from "@effect/schema/TreeFormatter";

const Person = Schema.struct({
  name: Schema.string,
  age: Schema.number,
});
type Person = Schema.To<typeof Person>;

const person = Schema.parseEither(Person)(
  { blob: "", name: "haha", age: 12 },
  { errors: "first", onExcessProperty: "ignore" }
);

const main = () => {
  console.log("main");
  console.log(Pretty.from(Person)({ name: "", age: 12 }));
  pipe(
    person,
    Either.mapLeft((e) => {
      console.log(TreeFormatter.formatErrors(e.errors));
      return e;
    })
  );
};

main();
