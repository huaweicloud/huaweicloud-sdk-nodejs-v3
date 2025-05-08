import { AtomicInputModel } from './AtomicInputModel';
import { AtomicOutputModel } from './AtomicOutputModel';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetDocumentAtomicInfoResponse extends SdkResponse {
    private 'atomic_unique_key'?: string;
    private 'atomic_name_zh'?: string;
    private 'atomic_name_en'?: string;
    public tags?: Array<string>;
    public inputs?: Array<AtomicInputModel>;
    public outputs?: AtomicOutputModel;
    public constructor() { 
        super();
    }
    public withAtomicUniqueKey(atomicUniqueKey: string): GetDocumentAtomicInfoResponse {
        this['atomic_unique_key'] = atomicUniqueKey;
        return this;
    }
    public set atomicUniqueKey(atomicUniqueKey: string  | undefined) {
        this['atomic_unique_key'] = atomicUniqueKey;
    }
    public get atomicUniqueKey(): string | undefined {
        return this['atomic_unique_key'];
    }
    public withAtomicNameZh(atomicNameZh: string): GetDocumentAtomicInfoResponse {
        this['atomic_name_zh'] = atomicNameZh;
        return this;
    }
    public set atomicNameZh(atomicNameZh: string  | undefined) {
        this['atomic_name_zh'] = atomicNameZh;
    }
    public get atomicNameZh(): string | undefined {
        return this['atomic_name_zh'];
    }
    public withAtomicNameEn(atomicNameEn: string): GetDocumentAtomicInfoResponse {
        this['atomic_name_en'] = atomicNameEn;
        return this;
    }
    public set atomicNameEn(atomicNameEn: string  | undefined) {
        this['atomic_name_en'] = atomicNameEn;
    }
    public get atomicNameEn(): string | undefined {
        return this['atomic_name_en'];
    }
    public withTags(tags: Array<string>): GetDocumentAtomicInfoResponse {
        this['tags'] = tags;
        return this;
    }
    public withInputs(inputs: Array<AtomicInputModel>): GetDocumentAtomicInfoResponse {
        this['inputs'] = inputs;
        return this;
    }
    public withOutputs(outputs: AtomicOutputModel): GetDocumentAtomicInfoResponse {
        this['outputs'] = outputs;
        return this;
    }
}