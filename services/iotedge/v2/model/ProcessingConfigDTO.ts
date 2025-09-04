import { PointCleanDTO } from './PointCleanDTO';
import { PointScalingDTO } from './PointScalingDTO';
import { PointValidityingDTO } from './PointValidityingDTO';


export class ProcessingConfigDTO {
    public validity?: PointValidityingDTO;
    private 'stream_formula'?: string;
    public scaling?: PointScalingDTO;
    public clean?: PointCleanDTO;
    public constructor() { 
    }
    public withValidity(validity: PointValidityingDTO): ProcessingConfigDTO {
        this['validity'] = validity;
        return this;
    }
    public withStreamFormula(streamFormula: string): ProcessingConfigDTO {
        this['stream_formula'] = streamFormula;
        return this;
    }
    public set streamFormula(streamFormula: string  | undefined) {
        this['stream_formula'] = streamFormula;
    }
    public get streamFormula(): string | undefined {
        return this['stream_formula'];
    }
    public withScaling(scaling: PointScalingDTO): ProcessingConfigDTO {
        this['scaling'] = scaling;
        return this;
    }
    public withClean(clean: PointCleanDTO): ProcessingConfigDTO {
        this['clean'] = clean;
        return this;
    }
}