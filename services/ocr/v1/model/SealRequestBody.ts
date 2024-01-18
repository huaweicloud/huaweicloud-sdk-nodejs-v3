

export class SealRequestBody {
    public data?: string;
    public url?: string;
    private 'return_seal_image'?: boolean;
    private 'return_erased_seal_image'?: boolean;
    private 'pdf_page_number'?: number;
    public constructor() { 
    }
    public withData(data: string): SealRequestBody {
        this['data'] = data;
        return this;
    }
    public withUrl(url: string): SealRequestBody {
        this['url'] = url;
        return this;
    }
    public withReturnSealImage(returnSealImage: boolean): SealRequestBody {
        this['return_seal_image'] = returnSealImage;
        return this;
    }
    public set returnSealImage(returnSealImage: boolean  | undefined) {
        this['return_seal_image'] = returnSealImage;
    }
    public get returnSealImage(): boolean | undefined {
        return this['return_seal_image'];
    }
    public withReturnErasedSealImage(returnErasedSealImage: boolean): SealRequestBody {
        this['return_erased_seal_image'] = returnErasedSealImage;
        return this;
    }
    public set returnErasedSealImage(returnErasedSealImage: boolean  | undefined) {
        this['return_erased_seal_image'] = returnErasedSealImage;
    }
    public get returnErasedSealImage(): boolean | undefined {
        return this['return_erased_seal_image'];
    }
    public withPdfPageNumber(pdfPageNumber: number): SealRequestBody {
        this['pdf_page_number'] = pdfPageNumber;
        return this;
    }
    public set pdfPageNumber(pdfPageNumber: number  | undefined) {
        this['pdf_page_number'] = pdfPageNumber;
    }
    public get pdfPageNumber(): number | undefined {
        return this['pdf_page_number'];
    }
}