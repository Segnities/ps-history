import { Prop, Schema } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import type { Subcategory } from './types/Subcategory';

export type CategoryDocument = HydratedDocument<Category>;

@Schema({ collection: 'categories' })
export class Category {
  @Prop({ required: true })
  title: string;

  @Prop()
  subcategories: Subcategory[];
}
