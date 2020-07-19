import { ArticleComplete } from './article';

export interface SearchResponse{
    hits: ArticleComplete[];
    nbHits: number;
    page: number;
    nbPages: number;
    hitsPerPage: number;
    exhaustiveNbHits: boolean;
    query: string;
    param: string;
    processingTimeMS: number;
}
