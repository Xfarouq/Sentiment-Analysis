const RunSentimentAnalysis = async () => {
    const textToAnalyze = document.getElementById("textToAnalyze").value;
    
    try {
        const response = await fetch(`sentimentAnalyzer?textToAnalyze=${textToAnalyze}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.text();
        document.getElementById("system_response").innerHTML = data;
    } catch (error) {
        console.error('Error:', error);
    }
}
