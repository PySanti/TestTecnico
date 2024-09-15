from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

# La llave secreta del proyecto deberia de estar almacenada
# en un archivo secrets.json, el cual no sea trackeado por git. Para fines de comodidad,
# esa practica no se realizara.
SECRET_KEY = 'django-insecure-p0s_=i$(ts%@7(_^@2*o==5yjm+u1pt^e707km#6gr05kqf@-b'
DEBUG = True

ALLOWED_HOSTS = ['*']


CORS_ALLOW_ALL_ORIGINS = True

# Application definition

BASE_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]
THIRD_PARTY_APPS = [
    'rest_framework',
    'corsheaders'
]
MY_APPS = [
    'applications.Usuarios',
    "applications.Cupos"
]
INSTALLED_APPS = BASE_APPS + THIRD_PARTY_APPS + MY_APPS

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'Telefonica.urls'
AUTH_USER_MODEL = "Usuarios.Usuarios"

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'Telefonica.wsgi.application'


# Database
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases


DATABASES = {
    # Los datos de acceso a la base de datos deberian de estar almacenados
    # en un archivo secrets.json, el cual no sea trackeado por git. Para fines de comodidad,
    # esa practica no se realizara.
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'Telefonica',
        'USER': 'pysanti',
        'PASSWORD': '123456789',
        'HOST': 'localhost',  
        'PORT': '3306', 
    }
}



# Password validation
# https://docs.djangoproject.com/en/4.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.1/howto/static-files/

STATIC_URL = 'static/'

# Default primary key field type
# https://docs.djangoproject.com/en/4.1/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
