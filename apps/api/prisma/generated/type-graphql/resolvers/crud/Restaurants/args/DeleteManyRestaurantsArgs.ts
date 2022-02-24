import * as TypeGraphQL from "type-graphql";
import { RestaurantsWhereInput } from "../../../inputs/RestaurantsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyRestaurantsArgs {
  @TypeGraphQL.Field((_type) => RestaurantsWhereInput, {
    nullable: true,
  })
  where?: RestaurantsWhereInput | undefined;
}