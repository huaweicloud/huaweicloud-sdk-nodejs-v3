import { AssessProperty } from './AssessProperty';


export class AssessResult {
    public speed?: AssessProperty;
    public sound?: AssessProperty;
    public snr?: AssessProperty;
    public reverb?: AssessProperty;
    private 'dnsmos_ovrl'?: AssessProperty;
    private 'dnsmos_bak'?: AssessProperty;
    public suggestion?: string;
    public constructor() { 
    }
    public withSpeed(speed: AssessProperty): AssessResult {
        this['speed'] = speed;
        return this;
    }
    public withSound(sound: AssessProperty): AssessResult {
        this['sound'] = sound;
        return this;
    }
    public withSnr(snr: AssessProperty): AssessResult {
        this['snr'] = snr;
        return this;
    }
    public withReverb(reverb: AssessProperty): AssessResult {
        this['reverb'] = reverb;
        return this;
    }
    public withDnsmosOvrl(dnsmosOvrl: AssessProperty): AssessResult {
        this['dnsmos_ovrl'] = dnsmosOvrl;
        return this;
    }
    public set dnsmosOvrl(dnsmosOvrl: AssessProperty  | undefined) {
        this['dnsmos_ovrl'] = dnsmosOvrl;
    }
    public get dnsmosOvrl(): AssessProperty | undefined {
        return this['dnsmos_ovrl'];
    }
    public withDnsmosBak(dnsmosBak: AssessProperty): AssessResult {
        this['dnsmos_bak'] = dnsmosBak;
        return this;
    }
    public set dnsmosBak(dnsmosBak: AssessProperty  | undefined) {
        this['dnsmos_bak'] = dnsmosBak;
    }
    public get dnsmosBak(): AssessProperty | undefined {
        return this['dnsmos_bak'];
    }
    public withSuggestion(suggestion: string): AssessResult {
        this['suggestion'] = suggestion;
        return this;
    }
}