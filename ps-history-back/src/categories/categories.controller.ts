import { Controller, Get } from '@nestjs/common';
import { CategoriesService } from './categories.service';
@Controller('/api/categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}
  @Get()
  getCategories(): string {
    return this.categoriesService.getCategories();
  }
}
