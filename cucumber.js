// cucumber.js

module.exports = {
    default: {
        require: ['features/step_definitions/**/*.js'],
        format: ['json:./reports/results.json'],
    },
};
