import { MetaData } from './MetaData';


export class MbTaskParameter {
    private 'status_description'?: string;
    private 'output_filename'?: string;
    public metadata?: MetaData;
    public constructor() { 
    }
    public withStatusDescription(statusDescription: string): MbTaskParameter {
        this['status_description'] = statusDescription;
        return this;
    }
    public set statusDescription(statusDescription: string  | undefined) {
        this['status_description'] = statusDescription;
    }
    public get statusDescription(): string | undefined {
        return this['status_description'];
    }
    public withOutputFilename(outputFilename: string): MbTaskParameter {
        this['output_filename'] = outputFilename;
        return this;
    }
    public set outputFilename(outputFilename: string  | undefined) {
        this['output_filename'] = outputFilename;
    }
    public get outputFilename(): string | undefined {
        return this['output_filename'];
    }
    public withMetadata(metadata: MetaData): MbTaskParameter {
        this['metadata'] = metadata;
        return this;
    }
}