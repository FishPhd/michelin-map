import * as TypeGraphQL from "type-graphql";
import { RestaurantsUpdateInput } from "../../../inputs/RestaurantsUpdateInput";
import { RestaurantsWhereUniqueInput } from "../../../inputs/RestaurantsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateRestaurantsArgs {
  @TypeGraphQL.Field((_type) => RestaurantsUpdateInput, {
    nullable: false,
  })
  data!: RestaurantsUpdateInput;

  @TypeGraphQL.Field((_type) => RestaurantsWhereUniqueInput, {
    nullable: false,
  })
  where!: RestaurantsWhereUniqueInput;
}
