export const conceptHeadings = [
    "Concept Name",
    "Description",
    "Usage Count",
    "Text URL",
    "Audio URL",
    "Document URL",
    "Conclusion URL"
]

const concepts = []
for (let i = 0; i < 8; i++) {
    concepts.push({
        id: i,
        name: 'Dummy Text',
        description: 'Dummy Text',
        usage: 'Dummy Text',
        text_url: 'Dummy Text',
        audio_url: 'Dummy Text',
        document_url: 'Dummy Text',
        conclusion_url: 'Dummy Text',
    });
}
export default concepts;