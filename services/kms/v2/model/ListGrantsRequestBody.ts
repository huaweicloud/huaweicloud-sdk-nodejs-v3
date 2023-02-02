

export class ListGrantsRequestBody {
    private 'key_id': string | undefined;
    public limit?: string;
    public marker?: string;
    public sequence?: string;
    public constructor(keyId?: any) { 
        this['key_id'] = keyId;
    }
    public withKeyId(keyId: string): ListGrantsRequestBody {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId() {
        return this['key_id'];
    }
    public withLimit(limit: string): ListGrantsRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListGrantsRequestBody {
        this['marker'] = marker;
        return this;
    }
    public withSequence(sequence: string): ListGrantsRequestBody {
        this['sequence'] = sequence;
        return this;
    }
}