from django.http import HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from .models import URL
import random
import string

# Helper function to generate a short URL
def generate_short_url():
    return ''.join(random.choices(string.ascii_letters + string.digits, k=6))

# View to handle URL shortening
def shorten_url(request):
    if request.method == "POST":
        original_url = request.POST.get('original_url')
        short_url = generate_short_url()

        url = URL.objects.create(original_url=original_url, short_url=short_url)
        return render(request, 'shortener/result.html', {'short_url': short_url})
    return render(request, 'shortener/home.html')

# View to handle redirecting to the original URL
def redirect_url(request, short_url):
    url = get_object_or_404(URL, short_url=short_url)
    return HttpResponseRedirect(url.original_url)
