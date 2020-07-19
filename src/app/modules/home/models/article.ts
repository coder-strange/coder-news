export interface Article {
    id: number;
    created_at: Date | string;
    author: string;
    title: string;
    url: string;
    text: string | null;
    points: number;
    parent_id: number | null;
    children: Article[];
}


export interface HighlightResult{
    title: Highlights;
    url: Highlights;
    story_text?: Highlights;
    author: Highlights;
 }

export interface Highlights{
    value: string;
    matchLevel: string;
    matchedWords?: any[];
}

export interface ArticleComplete{
    created_at: string;
    title: string;
    url: string;
    author: string;
    points: number;
    story_text: string | null;
    comment_text: string | null;
    num_comments: number;
    story_id: number | null;
    story_title: string | null;
    story_url: string | null;
    parent_id: number | null;
    created_at_i: number;
    relevancy_score?: number;
    _tags: string[];
    objectID: string;
    _highlightResult: HighlightResult | any;
    num_votes?: number;
    is_hidden?: boolean;
}
