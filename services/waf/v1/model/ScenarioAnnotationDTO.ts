import { RequestInspectionDTO } from './RequestInspectionDTO';
import { ResponseInspectionDTO } from './ResponseInspectionDTO';
import { UrlMatchDTO } from './UrlMatchDTO';


export class ScenarioAnnotationDTO {
    private 'scenario_type'?: ScenarioAnnotationDTOScenarioTypeEnum | string;
    private 'url_match'?: UrlMatchDTO;
    private 'request_inspection'?: RequestInspectionDTO;
    private 'response_inspection'?: ResponseInspectionDTO;
    public constructor(scenarioType?: string, urlMatch?: UrlMatchDTO, requestInspection?: RequestInspectionDTO) { 
        this['scenario_type'] = scenarioType;
        this['url_match'] = urlMatch;
        this['request_inspection'] = requestInspection;
    }
    public withScenarioType(scenarioType: ScenarioAnnotationDTOScenarioTypeEnum | string): ScenarioAnnotationDTO {
        this['scenario_type'] = scenarioType;
        return this;
    }
    public set scenarioType(scenarioType: ScenarioAnnotationDTOScenarioTypeEnum | string  | undefined) {
        this['scenario_type'] = scenarioType;
    }
    public get scenarioType(): ScenarioAnnotationDTOScenarioTypeEnum | string | undefined {
        return this['scenario_type'];
    }
    public withUrlMatch(urlMatch: UrlMatchDTO): ScenarioAnnotationDTO {
        this['url_match'] = urlMatch;
        return this;
    }
    public set urlMatch(urlMatch: UrlMatchDTO  | undefined) {
        this['url_match'] = urlMatch;
    }
    public get urlMatch(): UrlMatchDTO | undefined {
        return this['url_match'];
    }
    public withRequestInspection(requestInspection: RequestInspectionDTO): ScenarioAnnotationDTO {
        this['request_inspection'] = requestInspection;
        return this;
    }
    public set requestInspection(requestInspection: RequestInspectionDTO  | undefined) {
        this['request_inspection'] = requestInspection;
    }
    public get requestInspection(): RequestInspectionDTO | undefined {
        return this['request_inspection'];
    }
    public withResponseInspection(responseInspection: ResponseInspectionDTO): ScenarioAnnotationDTO {
        this['response_inspection'] = responseInspection;
        return this;
    }
    public set responseInspection(responseInspection: ResponseInspectionDTO  | undefined) {
        this['response_inspection'] = responseInspection;
    }
    public get responseInspection(): ResponseInspectionDTO | undefined {
        return this['response_inspection'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ScenarioAnnotationDTOScenarioTypeEnum {
    LOGIN = 'LOGIN',
    REGISTER = 'REGISTER',
    CUSTOM = 'CUSTOM'
}
