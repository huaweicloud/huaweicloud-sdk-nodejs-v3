

export class JobUpdateRequestBodyMetadata {
    public annotation?: { [key: string]: string; };
    public constructor() { 
    }
    public withAnnotation(annotation: { [key: string]: string; }): JobUpdateRequestBodyMetadata {
        this['annotation'] = annotation;
        return this;
    }
}