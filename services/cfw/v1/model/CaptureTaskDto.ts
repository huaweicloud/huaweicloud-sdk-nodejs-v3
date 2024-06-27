import { CaptureRuleAddressDto } from './CaptureRuleAddressDto';
import { CaptureServiceDto } from './CaptureServiceDto';


export class CaptureTaskDto {
    public destination?: CaptureRuleAddressDto;
    public duration?: number;
    private 'max_packets'?: number;
    public name?: string;
    public service?: CaptureServiceDto;
    public source?: CaptureRuleAddressDto;
    public constructor(destination?: CaptureRuleAddressDto, duration?: number, maxPackets?: number, name?: string, service?: CaptureServiceDto, source?: CaptureRuleAddressDto) { 
        this['destination'] = destination;
        this['duration'] = duration;
        this['max_packets'] = maxPackets;
        this['name'] = name;
        this['service'] = service;
        this['source'] = source;
    }
    public withDestination(destination: CaptureRuleAddressDto): CaptureTaskDto {
        this['destination'] = destination;
        return this;
    }
    public withDuration(duration: number): CaptureTaskDto {
        this['duration'] = duration;
        return this;
    }
    public withMaxPackets(maxPackets: number): CaptureTaskDto {
        this['max_packets'] = maxPackets;
        return this;
    }
    public set maxPackets(maxPackets: number  | undefined) {
        this['max_packets'] = maxPackets;
    }
    public get maxPackets(): number | undefined {
        return this['max_packets'];
    }
    public withName(name: string): CaptureTaskDto {
        this['name'] = name;
        return this;
    }
    public withService(service: CaptureServiceDto): CaptureTaskDto {
        this['service'] = service;
        return this;
    }
    public withSource(source: CaptureRuleAddressDto): CaptureTaskDto {
        this['source'] = source;
        return this;
    }
}