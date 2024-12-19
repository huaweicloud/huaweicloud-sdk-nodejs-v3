

export class AutoClassificationRequestBody {
    public image?: string;
    public url?: string;
    private 'type_list'?: Array<string>;
    private 'pdf_page_number'?: number;
    private 'extended_parameters'?: object;
    private 'detect_seal'?: boolean;
    public constructor() { 
    }
    public withImage(image: string): AutoClassificationRequestBody {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): AutoClassificationRequestBody {
        this['url'] = url;
        return this;
    }
    public withTypeList(typeList: Array<string>): AutoClassificationRequestBody {
        this['type_list'] = typeList;
        return this;
    }
    public set typeList(typeList: Array<string>  | undefined) {
        this['type_list'] = typeList;
    }
    public get typeList(): Array<string> | undefined {
        return this['type_list'];
    }
    public withPdfPageNumber(pdfPageNumber: number): AutoClassificationRequestBody {
        this['pdf_page_number'] = pdfPageNumber;
        return this;
    }
    public set pdfPageNumber(pdfPageNumber: number  | undefined) {
        this['pdf_page_number'] = pdfPageNumber;
    }
    public get pdfPageNumber(): number | undefined {
        return this['pdf_page_number'];
    }
    public withExtendedParameters(extendedParameters: object): AutoClassificationRequestBody {
        this['extended_parameters'] = extendedParameters;
        return this;
    }
    public set extendedParameters(extendedParameters: object  | undefined) {
        this['extended_parameters'] = extendedParameters;
    }
    public get extendedParameters(): object | undefined {
        return this['extended_parameters'];
    }
    public withDetectSeal(detectSeal: boolean): AutoClassificationRequestBody {
        this['detect_seal'] = detectSeal;
        return this;
    }
    public set detectSeal(detectSeal: boolean  | undefined) {
        this['detect_seal'] = detectSeal;
    }
    public get detectSeal(): boolean | undefined {
        return this['detect_seal'];
    }
}