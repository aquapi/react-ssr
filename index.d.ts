declare const ssr: {
    build(): Promise<void>;
    renderToHTML(path: string, props?: object): Promise<string>;
}

export = ssr;