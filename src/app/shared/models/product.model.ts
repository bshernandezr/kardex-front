export class ProductListResponse {
  data!: PaginationResult
  message!: string
  code!: number
}

export class Product {
  id!: number
  description!: string
  price!: string
  stock!: number
  creationDate!: Date
  lastUpdate!: Date
}

export class PaginationResult {
  list!: Product[]
  page!: number;
  hitsPerPage!: number;
  totalHits!: number;
}

export class CreateProductRequest {
  id!: number
  description!: string
  price!: string
  stock!: number
}
