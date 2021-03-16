/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier


import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

interface IRequest {
    name: string,
    description: string
}

class CreateCategoryService {

    constructor(private categoriesRepository: ICategoriesRepository) {}

    execute({ name, description }: IRequest): void {
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Category Already exists!")
        }
    
        this.categoriesRepository.create({ name, description})
    }
}

export { CreateCategoryService }