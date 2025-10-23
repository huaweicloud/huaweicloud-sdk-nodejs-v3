

export class GeneralTextRequestBody {
    public image?: string;
    public url?: string;
    private 'detect_direction'?: boolean;
    private 'quick_mode'?: boolean;
    private 'character_mode'?: boolean;
    public language?: string;
    private 'single_orientation_mode'?: boolean;
    private 'pdf_page_number'?: number;
    private 'return_markdown_result'?: boolean;
    public constructor() { 
    }
    public withImage(image: string): GeneralTextRequestBody {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): GeneralTextRequestBody {
        this['url'] = url;
        return this;
    }
    public withDetectDirection(detectDirection: boolean): GeneralTextRequestBody {
        this['detect_direction'] = detectDirection;
        return this;
    }
    public set detectDirection(detectDirection: boolean  | undefined) {
        this['detect_direction'] = detectDirection;
    }
    public get detectDirection(): boolean | undefined {
        return this['detect_direction'];
    }
    public withQuickMode(quickMode: boolean): GeneralTextRequestBody {
        this['quick_mode'] = quickMode;
        return this;
    }
    public set quickMode(quickMode: boolean  | undefined) {
        this['quick_mode'] = quickMode;
    }
    public get quickMode(): boolean | undefined {
        return this['quick_mode'];
    }
    public withCharacterMode(characterMode: boolean): GeneralTextRequestBody {
        this['character_mode'] = characterMode;
        return this;
    }
    public set characterMode(characterMode: boolean  | undefined) {
        this['character_mode'] = characterMode;
    }
    public get characterMode(): boolean | undefined {
        return this['character_mode'];
    }
    public withLanguage(language: string): GeneralTextRequestBody {
        this['language'] = language;
        return this;
    }
    public withSingleOrientationMode(singleOrientationMode: boolean): GeneralTextRequestBody {
        this['single_orientation_mode'] = singleOrientationMode;
        return this;
    }
    public set singleOrientationMode(singleOrientationMode: boolean  | undefined) {
        this['single_orientation_mode'] = singleOrientationMode;
    }
    public get singleOrientationMode(): boolean | undefined {
        return this['single_orientation_mode'];
    }
    public withPdfPageNumber(pdfPageNumber: number): GeneralTextRequestBody {
        this['pdf_page_number'] = pdfPageNumber;
        return this;
    }
    public set pdfPageNumber(pdfPageNumber: number  | undefined) {
        this['pdf_page_number'] = pdfPageNumber;
    }
    public get pdfPageNumber(): number | undefined {
        return this['pdf_page_number'];
    }
    public withReturnMarkdownResult(returnMarkdownResult: boolean): GeneralTextRequestBody {
        this['return_markdown_result'] = returnMarkdownResult;
        return this;
    }
    public set returnMarkdownResult(returnMarkdownResult: boolean  | undefined) {
        this['return_markdown_result'] = returnMarkdownResult;
    }
    public get returnMarkdownResult(): boolean | undefined {
        return this['return_markdown_result'];
    }
}