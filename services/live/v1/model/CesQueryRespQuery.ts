import { CesDimsItem } from './CesDimsItem';


export class CesQueryRespQuery {
    private 'medialive_mpc'?: CesDimsItem;
    public pipeline?: CesDimsItem;
    public audio?: CesDimsItem;
    private 'medialive_cdn'?: CesDimsItem;
    private 'medialive_package'?: CesDimsItem;
    private 'medialive_connect'?: CesDimsItem;
    private 'medialive_tailor'?: CesDimsItem;
    public constructor(medialiveMpc?: CesDimsItem, pipeline?: CesDimsItem, audio?: CesDimsItem, medialiveCdn?: CesDimsItem, medialivePackage?: CesDimsItem, medialiveConnect?: CesDimsItem, medialiveTailor?: CesDimsItem) { 
        this['medialive_mpc'] = medialiveMpc;
        this['pipeline'] = pipeline;
        this['audio'] = audio;
        this['medialive_cdn'] = medialiveCdn;
        this['medialive_package'] = medialivePackage;
        this['medialive_connect'] = medialiveConnect;
        this['medialive_tailor'] = medialiveTailor;
    }
    public withMedialiveMpc(medialiveMpc: CesDimsItem): CesQueryRespQuery {
        this['medialive_mpc'] = medialiveMpc;
        return this;
    }
    public set medialiveMpc(medialiveMpc: CesDimsItem  | undefined) {
        this['medialive_mpc'] = medialiveMpc;
    }
    public get medialiveMpc(): CesDimsItem | undefined {
        return this['medialive_mpc'];
    }
    public withPipeline(pipeline: CesDimsItem): CesQueryRespQuery {
        this['pipeline'] = pipeline;
        return this;
    }
    public withAudio(audio: CesDimsItem): CesQueryRespQuery {
        this['audio'] = audio;
        return this;
    }
    public withMedialiveCdn(medialiveCdn: CesDimsItem): CesQueryRespQuery {
        this['medialive_cdn'] = medialiveCdn;
        return this;
    }
    public set medialiveCdn(medialiveCdn: CesDimsItem  | undefined) {
        this['medialive_cdn'] = medialiveCdn;
    }
    public get medialiveCdn(): CesDimsItem | undefined {
        return this['medialive_cdn'];
    }
    public withMedialivePackage(medialivePackage: CesDimsItem): CesQueryRespQuery {
        this['medialive_package'] = medialivePackage;
        return this;
    }
    public set medialivePackage(medialivePackage: CesDimsItem  | undefined) {
        this['medialive_package'] = medialivePackage;
    }
    public get medialivePackage(): CesDimsItem | undefined {
        return this['medialive_package'];
    }
    public withMedialiveConnect(medialiveConnect: CesDimsItem): CesQueryRespQuery {
        this['medialive_connect'] = medialiveConnect;
        return this;
    }
    public set medialiveConnect(medialiveConnect: CesDimsItem  | undefined) {
        this['medialive_connect'] = medialiveConnect;
    }
    public get medialiveConnect(): CesDimsItem | undefined {
        return this['medialive_connect'];
    }
    public withMedialiveTailor(medialiveTailor: CesDimsItem): CesQueryRespQuery {
        this['medialive_tailor'] = medialiveTailor;
        return this;
    }
    public set medialiveTailor(medialiveTailor: CesDimsItem  | undefined) {
        this['medialive_tailor'] = medialiveTailor;
    }
    public get medialiveTailor(): CesDimsItem | undefined {
        return this['medialive_tailor'];
    }
}