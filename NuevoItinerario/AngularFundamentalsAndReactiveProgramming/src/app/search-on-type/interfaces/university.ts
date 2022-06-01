export interface UniversityInterface {
    name: string,
    url: string
}

export class University implements UniversityInterface {
    name: string;
    url: string;

    constructor(name: string, url: string) {
        this.name = name;
        this.url = url;
    }
}