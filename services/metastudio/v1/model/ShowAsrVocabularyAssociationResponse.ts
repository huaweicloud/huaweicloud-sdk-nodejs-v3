import { AsrVocabularyAssociation } from './AsrVocabularyAssociation';
import { Pages } from './Pages';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAsrVocabularyAssociationResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public count?: number;
    public data?: Array<AsrVocabularyAssociation>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): ShowAsrVocabularyAssociationResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowAsrVocabularyAssociationResponse {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): ShowAsrVocabularyAssociationResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<AsrVocabularyAssociation>): ShowAsrVocabularyAssociationResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): ShowAsrVocabularyAssociationResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}