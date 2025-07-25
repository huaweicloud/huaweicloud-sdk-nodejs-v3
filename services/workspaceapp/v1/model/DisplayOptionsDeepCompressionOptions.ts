

export class DisplayOptionsDeepCompressionOptions {
    private 'deep_compression_level'?: DisplayOptionsDeepCompressionOptionsDeepCompressionLevelEnum | string;
    public constructor() { 
    }
    public withDeepCompressionLevel(deepCompressionLevel: DisplayOptionsDeepCompressionOptionsDeepCompressionLevelEnum | string): DisplayOptionsDeepCompressionOptions {
        this['deep_compression_level'] = deepCompressionLevel;
        return this;
    }
    public set deepCompressionLevel(deepCompressionLevel: DisplayOptionsDeepCompressionOptionsDeepCompressionLevelEnum | string  | undefined) {
        this['deep_compression_level'] = deepCompressionLevel;
    }
    public get deepCompressionLevel(): DisplayOptionsDeepCompressionOptionsDeepCompressionLevelEnum | string | undefined {
        return this['deep_compression_level'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DisplayOptionsDeepCompressionOptionsDeepCompressionLevelEnum {
    COMPRESSION_GRADE_0 = 'Compression grade 0',
    COMPRESSION_GRADE_1 = 'Compression grade 1',
    COMPRESSION_GRADE_2 = 'Compression grade 2',
    COMPRESSION_GRADE_3 = 'Compression grade 3',
    COMPRESSION_GRADE_4 = 'Compression grade 4',
    COMPRESSION_GRADE_5 = 'Compression grade 5',
    COMPRESSION_GRADE_6 = 'Compression grade 6',
    COMPRESSION_GRADE_7 = 'Compression grade 7',
    COMPRESSION_GRADE_8 = 'Compression grade 8',
    COMPRESSION_GRADE_9 = 'Compression grade 9'
}
