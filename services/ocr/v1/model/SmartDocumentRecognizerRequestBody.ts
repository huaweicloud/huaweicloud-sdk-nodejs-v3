

export class SmartDocumentRecognizerRequestBody {
    public data?: string;
    public url?: string;
    private 'single_orientation_mode'?: boolean;
    public language?: string;
    public kv?: boolean;
    public table?: boolean;
    public layout?: boolean;
    private 'return_excel'?: boolean;
    public form?: boolean;
    public formula?: boolean;
    private 'image_layout'?: boolean;
    private 'kv_map'?: string;
    private 'erase_seal'?: boolean;
    private 'pdf_page_number'?: number;
    private 'character_mode'?: boolean;
    public constructor() { 
    }
    public withData(data: string): SmartDocumentRecognizerRequestBody {
        this['data'] = data;
        return this;
    }
    public withUrl(url: string): SmartDocumentRecognizerRequestBody {
        this['url'] = url;
        return this;
    }
    public withSingleOrientationMode(singleOrientationMode: boolean): SmartDocumentRecognizerRequestBody {
        this['single_orientation_mode'] = singleOrientationMode;
        return this;
    }
    public set singleOrientationMode(singleOrientationMode: boolean  | undefined) {
        this['single_orientation_mode'] = singleOrientationMode;
    }
    public get singleOrientationMode(): boolean | undefined {
        return this['single_orientation_mode'];
    }
    public withLanguage(language: string): SmartDocumentRecognizerRequestBody {
        this['language'] = language;
        return this;
    }
    public withKv(kv: boolean): SmartDocumentRecognizerRequestBody {
        this['kv'] = kv;
        return this;
    }
    public withTable(table: boolean): SmartDocumentRecognizerRequestBody {
        this['table'] = table;
        return this;
    }
    public withLayout(layout: boolean): SmartDocumentRecognizerRequestBody {
        this['layout'] = layout;
        return this;
    }
    public withReturnExcel(returnExcel: boolean): SmartDocumentRecognizerRequestBody {
        this['return_excel'] = returnExcel;
        return this;
    }
    public set returnExcel(returnExcel: boolean  | undefined) {
        this['return_excel'] = returnExcel;
    }
    public get returnExcel(): boolean | undefined {
        return this['return_excel'];
    }
    public withForm(form: boolean): SmartDocumentRecognizerRequestBody {
        this['form'] = form;
        return this;
    }
    public withFormula(formula: boolean): SmartDocumentRecognizerRequestBody {
        this['formula'] = formula;
        return this;
    }
    public withImageLayout(imageLayout: boolean): SmartDocumentRecognizerRequestBody {
        this['image_layout'] = imageLayout;
        return this;
    }
    public set imageLayout(imageLayout: boolean  | undefined) {
        this['image_layout'] = imageLayout;
    }
    public get imageLayout(): boolean | undefined {
        return this['image_layout'];
    }
    public withKvMap(kvMap: string): SmartDocumentRecognizerRequestBody {
        this['kv_map'] = kvMap;
        return this;
    }
    public set kvMap(kvMap: string  | undefined) {
        this['kv_map'] = kvMap;
    }
    public get kvMap(): string | undefined {
        return this['kv_map'];
    }
    public withEraseSeal(eraseSeal: boolean): SmartDocumentRecognizerRequestBody {
        this['erase_seal'] = eraseSeal;
        return this;
    }
    public set eraseSeal(eraseSeal: boolean  | undefined) {
        this['erase_seal'] = eraseSeal;
    }
    public get eraseSeal(): boolean | undefined {
        return this['erase_seal'];
    }
    public withPdfPageNumber(pdfPageNumber: number): SmartDocumentRecognizerRequestBody {
        this['pdf_page_number'] = pdfPageNumber;
        return this;
    }
    public set pdfPageNumber(pdfPageNumber: number  | undefined) {
        this['pdf_page_number'] = pdfPageNumber;
    }
    public get pdfPageNumber(): number | undefined {
        return this['pdf_page_number'];
    }
    public withCharacterMode(characterMode: boolean): SmartDocumentRecognizerRequestBody {
        this['character_mode'] = characterMode;
        return this;
    }
    public set characterMode(characterMode: boolean  | undefined) {
        this['character_mode'] = characterMode;
    }
    public get characterMode(): boolean | undefined {
        return this['character_mode'];
    }
}