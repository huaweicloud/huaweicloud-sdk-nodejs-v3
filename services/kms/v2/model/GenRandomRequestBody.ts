

export class GenRandomRequestBody {
    private 'random_data_length': string | undefined;
    public sequence?: string;
    public constructor(randomDataLength?: any) { 
        this['random_data_length'] = randomDataLength;
    }
    public withRandomDataLength(randomDataLength: string): GenRandomRequestBody {
        this['random_data_length'] = randomDataLength;
        return this;
    }
    public set randomDataLength(randomDataLength: string | undefined) {
        this['random_data_length'] = randomDataLength;
    }
    public get randomDataLength() {
        return this['random_data_length'];
    }
    public withSequence(sequence: string): GenRandomRequestBody {
        this['sequence'] = sequence;
        return this;
    }
}