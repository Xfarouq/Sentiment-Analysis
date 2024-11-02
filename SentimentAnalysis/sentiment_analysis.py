from transformers import pipeline

def sentiment_analyzer(text_to_analyse):
    # Load a pre-trained sentiment-analysis model from Hugging Face
    sentiment_pipeline = pipeline("sentiment-analysis")

    # Run sentiment analysis
    result = sentiment_pipeline(text_to_analyse)[0]

    # Extracting sentiment label and score from the result
    label = result['label']
    score = result['score']

    # Returning a dictionary containing sentiment analysis results
    return {'label': label, 'score': score}
