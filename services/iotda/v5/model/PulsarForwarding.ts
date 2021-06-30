

export class PulsarForwarding {
    public url: string;
    public topic: string;
    private 'cert_id'?: string | undefined;
    public constructor(url?: any, topic?: any) { 
        this['url'] = url;
        this['topic'] = topic;
    }
    public withUrl(url: string): PulsarForwarding {
        this['url'] = url;
        return this;
    }
    public withTopic(topic: string): PulsarForwarding {
        this['topic'] = topic;
        return this;
    }
    public withCertId(certId: string): PulsarForwarding {
        this['cert_id'] = certId;
        return this;
    }
    public set certId(certId: string | undefined) {
        this['cert_id'] = certId;
    }
    public get certId() {
        return this['cert_id'];
    }
}