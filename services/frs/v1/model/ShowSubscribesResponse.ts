import { ServiceInfo } from './ServiceInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSubscribesResponse extends SdkResponse {
    private 'max_face_set_number'?: number | undefined;
    private 'detect_service'?: ServiceInfo | undefined;
    private 'live_detect_service'?: ServiceInfo | undefined;
    private 'compare_service'?: ServiceInfo | undefined;
    private 'search_service'?: ServiceInfo | undefined;
    public constructor() { 
        super();
    }
    public withMaxFaceSetNumber(maxFaceSetNumber: number): ShowSubscribesResponse {
        this['max_face_set_number'] = maxFaceSetNumber;
        return this;
    }
    public set maxFaceSetNumber(maxFaceSetNumber: number | undefined) {
        this['max_face_set_number'] = maxFaceSetNumber;
    }
    public get maxFaceSetNumber() {
        return this['max_face_set_number'];
    }
    public withDetectService(detectService: ServiceInfo): ShowSubscribesResponse {
        this['detect_service'] = detectService;
        return this;
    }
    public set detectService(detectService: ServiceInfo | undefined) {
        this['detect_service'] = detectService;
    }
    public get detectService() {
        return this['detect_service'];
    }
    public withLiveDetectService(liveDetectService: ServiceInfo): ShowSubscribesResponse {
        this['live_detect_service'] = liveDetectService;
        return this;
    }
    public set liveDetectService(liveDetectService: ServiceInfo | undefined) {
        this['live_detect_service'] = liveDetectService;
    }
    public get liveDetectService() {
        return this['live_detect_service'];
    }
    public withCompareService(compareService: ServiceInfo): ShowSubscribesResponse {
        this['compare_service'] = compareService;
        return this;
    }
    public set compareService(compareService: ServiceInfo | undefined) {
        this['compare_service'] = compareService;
    }
    public get compareService() {
        return this['compare_service'];
    }
    public withSearchService(searchService: ServiceInfo): ShowSubscribesResponse {
        this['search_service'] = searchService;
        return this;
    }
    public set searchService(searchService: ServiceInfo | undefined) {
        this['search_service'] = searchService;
    }
    public get searchService() {
        return this['search_service'];
    }
}