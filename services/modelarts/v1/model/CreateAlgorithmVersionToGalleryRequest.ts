import { CreateAlgorithmVersionToGalleryBody } from './CreateAlgorithmVersionToGalleryBody';


export class CreateAlgorithmVersionToGalleryRequest {
    public body?: CreateAlgorithmVersionToGalleryBody;
    public constructor() { 
    }
    public withBody(body: CreateAlgorithmVersionToGalleryBody): CreateAlgorithmVersionToGalleryRequest {
        this['body'] = body;
        return this;
    }
}