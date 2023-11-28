# Sales Index

Micro-Frontend that provides a list of the vehicle sales of a dealer 🚘💰

![car sales table design](docs/sales-index-design.png)

## Translations

We use Phrase to manage translations, so to get the latest translations for the app run:

```bash
cd frontend
npm run getLatestTranslations
```

## Dependencies

### React

Design 6 forces us to use React v17.x.

Do not update to React v18 without checking with D6!!!

### Jest and JS Dom

The versions for these dependencies are fixed to 27.5.1 due to an error when introducing Design 6 into the product.
