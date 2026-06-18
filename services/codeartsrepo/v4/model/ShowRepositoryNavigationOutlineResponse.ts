import { SymbolNodeDto } from './SymbolNodeDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRepositoryNavigationOutlineResponse extends SdkResponse {
    public result?: string;
    public message?: string;
    private 'file_path'?: string;
    public revision?: string;
    public symbols?: Array<SymbolNodeDto>;
    public constructor() { 
        super();
    }
    public withResult(result: string): ShowRepositoryNavigationOutlineResponse {
        this['result'] = result;
        return this;
    }
    public withMessage(message: string): ShowRepositoryNavigationOutlineResponse {
        this['message'] = message;
        return this;
    }
    public withFilePath(filePath: string): ShowRepositoryNavigationOutlineResponse {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withRevision(revision: string): ShowRepositoryNavigationOutlineResponse {
        this['revision'] = revision;
        return this;
    }
    public withSymbols(symbols: Array<SymbolNodeDto>): ShowRepositoryNavigationOutlineResponse {
        this['symbols'] = symbols;
        return this;
    }
}